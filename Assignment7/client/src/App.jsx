import { useEffect, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const initialForm = {
  studentName: "",
  prn: "",
  courseName: "",
  rating: 5,
  suggestions: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    loadFeedbacks();
  }, []);

  async function loadFeedbacks() {
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(`${apiBaseUrl}/api/feedbacks`);

      if (!response.ok) {
        throw new Error("Unable to fetch feedback.");
      }

      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      setError("Could not load reviews. Please check the backend connection.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === "rating" ? Number(value) : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/feedbacks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed.");
      }

      setFeedbacks((current) => [data, ...current]);
      setFormData(initialForm);
      setSuccessMessage("Feedback submitted successfully.");
    } catch (err) {
      setError(err.message || "Could not submit feedback.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Academic Review Portal</p>
          <h1>Student Feedback Review System</h1>
          <p className="hero-copy">
            Collect course reviews with student details, star ratings, and
            improvement suggestions in one place.
          </p>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <h2>Submit Feedback</h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <label>
              Student Name
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student name"
                required
              />
            </label>

            <label>
              PRN
              <input
                type="text"
                name="prn"
                value={formData.prn}
                onChange={handleChange}
                placeholder="Enter PRN number"
                required
              />
            </label>

            <label>
              Course Name
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="Enter course name"
                required
              />
            </label>

            <label>
              Star Feedback
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
            </label>

            <label>
              Descriptive Suggestions
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                placeholder="Share detailed suggestions or feedback"
                rows="5"
                required
              />
            </label>

            {error ? <p className="message error">{error}</p> : null}
            {successMessage ? (
              <p className="message success">{successMessage}</p>
            ) : null}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Recent Reviews</h2>
            <button type="button" className="secondary-button" onClick={loadFeedbacks}>
              Refresh
            </button>
          </div>

          {isLoading ? <p className="empty-state">Loading reviews...</p> : null}

          {!isLoading && feedbacks.length === 0 ? (
            <p className="empty-state">No feedback submitted yet.</p>
          ) : null}

          <div className="review-list">
            {feedbacks.map((feedback) => (
              <article className="review-card" key={feedback._id}>
                <div className="review-topline">
                  <div>
                    <h3>{feedback.studentName}</h3>
                    <p>
                      PRN: {feedback.prn} | {feedback.courseName}
                    </p>
                  </div>
                  <span className="rating-badge">Rating: {feedback.rating}/5</span>
                </div>
                <p className="suggestion-text">{feedback.suggestions}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
