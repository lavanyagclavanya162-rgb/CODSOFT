body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
    font-family: Arial, sans-serif;
}

.calculator {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
}

#display {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-size: 24px;
    text-align: right;
    padding: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    gap: 10px;
}

button {
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    background: #ff8c00;
    color: white;
    border-radius: 5px;
    transition: background 0.3s;
}

button:hover {
    background: #e07b00;
}

