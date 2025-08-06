/* Base Styles */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f4f4f4;
    transition: background-color 0.3s ease;
}

header, main, footer {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

/* Form Styles */
.form-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    height: 100px;
    resize: vertical;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    font-size: 0.8em;
    display: block;
    margin-top: 5px;
}

/* Features Section */
.features {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.feature {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 250px;
}

.feature h3 {
    margin-top: 0;
}

/* Responsive Design */
@media (max-width: 600px) {
    .features {
        flex-direction: column;
    }
}
