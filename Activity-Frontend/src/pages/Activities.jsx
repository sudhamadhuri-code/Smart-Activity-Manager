import { useEffect, useState } from "react";
import API from "../api";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    content: "",
    status: "PENDING",
    priority: "MEDIUM",
  });

  const emailId = localStorage.getItem("emailId");

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      const res = await API.get(
        `/activities/getAllActivitiesByUser/${emailId}`
      );
      setActivities(res.data);
    } catch {
      setMessage("Failed to load activities");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content) {
      setMessage("Title and Content are required");
      return;
    }

    const activityData = {
      ...form,
      author: emailId,
    };

    try {
      if (editingId) {
        await API.put(`/activities/${editingId}`, activityData);
        setMessage("Activity updated successfully");
        setEditingId(null);
      } else {
        await API.post("/activities", activityData);
        setMessage("Activity created successfully");
      }

      resetForm();
      fetchActivities();
    } catch {
      setMessage("Something went wrong");
    }
  };

  const improveContent = async () => {
    if (!form.content) {
      setMessage("Write content first");
      return;
    }

    try {
      setAiLoading(true);
      setMessage("Improving content...");

      const res = await API.post("/blogAiController/suggest", {
        currentContent: form.content,
      });

      setForm({
        ...form,
        content: res.data,
      });

      setMessage("Content improved successfully");
    } catch {
      setMessage("AI improvement failed");
    } finally {
      setAiLoading(false);
    }
  };

  const handleEdit = (activity) => {
    setForm(activity);
    setEditingId(activity.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this activity?"))
      return;

    try {
      await API.delete(`/activities/${id}`);
      setMessage("Activity deleted successfully");
      fetchActivities();
    } catch {
      setMessage("Delete failed");
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      content: "",
      status: "PENDING",
      priority: "MEDIUM",
    });
  };

  return (
    <div style={styles.container}>
      <h2>
        {editingId ? "Edit Activity" : "Write New Activity"}
      </h2>

      {message && <div style={styles.message}>{message}</div>}

      <div style={styles.editor}>
        <div style={styles.field}>
          <label>Title</label>
          <input
            style={styles.input}
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        <div style={styles.field}>
          <label>Content</label>

          <button
            style={styles.aiBtn}
            onClick={improveContent}
            disabled={aiLoading}
          >
            {aiLoading ? "Improving..." : "Improve with AI"}
          </button>

          <textarea
            style={styles.textarea}
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />
        </div>

        <div style={styles.options}>
          <div>
            <label>  <span style={{ color: "#d260b3", fontWeight: "bold" }}>
    Status:
  </span>{" "}
</label>
            <select
              style={styles.select}
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>PENDING</option>
              <option>COMPLETED</option>
            </select>
          </div>

          <div>
            <label><span style={{ color: "#d260b3", fontWeight: "bold" }}>
    Priority:
  </span>{" "}</label>
            <select
              style={styles.select}
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
          </div>

          <div style={{ alignSelf: "flex-end" }}>
            <button style={styles.publishBtn} onClick={handleSubmit}>
              {editingId ? "Update" : "Publish   ➤"}
            </button>

            {editingId && (
              <button
                style={styles.cancelBtn}
                onClick={() => {
                  setEditingId(null);
                  resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>Your Activities</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.grid}>
          {activities.map((a) => (
            <div key={a.id} style={styles.card}>
<h3>{a.title}</h3>

<div style={{ flex: 1, overflowY: "auto" }}>
  <p>{a.content}</p>
</div>
              <div style={styles.meta}>
                <span>Status: {a.status}</span>
                <span>Priority: {a.priority}</span>
              </div>

              <div style={styles.cardButtons}>
                <button
  style={styles.editBtn}
  onClick={() => handleEdit(a)}
>
  Edit 🖊
</button>
<button
  style={styles.deleteBtn}
  onClick={() => handleDelete(a.id)}
>
  Delete 🗑
</button>              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    fontFamily: "Segoe UI",
  },
  message: {
    marginBottom: "15px",
    padding: "10px",
    background: "#f0f8ff",
    borderRadius: "6px",
  },
  editor: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },
  field: {
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    height: "120px",
  },
  options: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  publishBtn: {
    background: "#4CAF50",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"

  },
  cancelBtn: {
    background: "#999",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  aiBtn: {
    background: "#673ab7",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
    width: "fit-content",
    fontWeight: "bold"

  },
  grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
  alignItems: "start",   // ⭐ THIS FIXES THE PROBLEM
},
  
  card: {
  padding: "20px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",

  height: "400px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
},
  meta: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "gray",
  },
  cardButtons: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  editBtn: {
    background: "#2196F3",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",


  },
  deleteBtn: {
    background: "#e37169",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",



  },
};

export default Activities;