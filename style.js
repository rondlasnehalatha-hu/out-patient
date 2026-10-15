
body {
    font-family: Arial, sans-serif;
    background: #eef5f9;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 10px #ccc;
}

h1, h2 {
    text-align: center;
    color: #087f8c;
}

form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin-bottom: 25px;
}

input, select, button {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    min-width: 0;
}

button {
    background: #087f8c;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #05616b;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background: #087f8c;
    color: white;
}

tr:nth-child(even) {
    background: #f2f8fa;
}

.delete-btn {
    background: #d93636;
}

.table-container {
    overflow-x: auto;
}

#search {
    width: 100%;
    box-sizing: border-box;
}
