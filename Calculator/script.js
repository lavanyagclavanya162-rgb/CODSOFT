body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f2f2f2;
    font-family: 'Arial', sans-serif;
}

.calculator {
    background: #3498db;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    width: 250px;
}

#display {
    width: 100%;
    height: 60px;
    text-align: right;
    font-size: 32px;
    margin-bottom: 15px;
    border: none;
    border-radius: 10px;
    padding: 10px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

button {
    padding: 20px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background: #2980b9;
    color: white;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #1c5980;
}

.span2 {
    grid-column: span 2;
}
