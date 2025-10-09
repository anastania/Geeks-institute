import React from "react";

const WEBHOOK_URL = "https://webhook.site/bec2de9d-ada3-4211-9865-2dc7172520ed";

export default function WebhookPoster() {
  const sendData = async () => {
    try {
      const payload = {
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Try to read JSON or text response
      let result;
      const type = res.headers.get("content-type") || "";
      if (type.includes("application/json")) {
        result = await res.json();
      } else {
        result = await res.text();
      }

      console.log("Webhook response:", result);
      alert("✅ Data sent! Check console and your webhook dashboard.");
    } catch (err) {
      console.error("❌ Error sending data:", err);
      alert("Error — see console.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Exercise 4 – Post JSON Data</h2>
      <p>Click to send a JSON payload to your webhook URL.</p>
      <button className="btn btn-primary" onClick={sendData}>
        Send Test POST
      </button>
    </div>
  );
}
