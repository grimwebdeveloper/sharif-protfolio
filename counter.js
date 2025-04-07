<!DOCTYPE html>
<html>
<head>
    <title>Simple Counter</title>
    <style>
        .counter-container {
            text-align: center;
            margin-top: 50px;
        }
        .counter {
            font-size: 48px;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 18px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="counter-container">
        <h1>Simple Counter</h1>
        <div class="counter" id="count">0</div>
        <button onclick="decrement()">-</button>
        <button onclick="increment()">+</button>
    </div>

    <script>
        let count = 0;
        const countElement = document.getElementById('count');

        function increment() {
            count++;
            countElement.textContent = count;
        }

        function decrement() {
            count--;
            countElement.textContent = count;
        }
    </script>
</body>
</html> 