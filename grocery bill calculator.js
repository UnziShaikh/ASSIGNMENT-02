<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Grocery Bill</title>
</head>
<body>
  <div class="container">
    <div class="input-section">
      <div>
        <label for="riceQty">Rice Quantity</label>
        <input type="text" name="riceQty" id="riceQty" placeholder="0.00">
      </div>
      <div>
        <label for="beansQty">Beans Quantity</label>
        <input type="text" name="beansQty" id="beansQty" placeholder="0.00">
      </div>
      <div>
        <label for="chickenQty">Chicken Quantity</label>
        <input type="text" name="chickenQty" id="chickenQty" placeholder="0.00">
      </div>
      <button id="calculateBtn">Calculate</button>
    </div>
    <div class="card">
      <h2>Price Card</h2>
      <p>Rice Price: <b>$4</b></p>
      <p>Beans Price: <b>$3</b></p>
      <p>Chicken Price: <b>$7</b></p>
      <p>Total Price: <b id="total">$0.00</b></p>
    </div>
  </div>
  <script src="app.js"></script>
</body
