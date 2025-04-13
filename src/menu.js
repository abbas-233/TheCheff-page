function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Classic Hamburger",
      "Fresh beef patty, lettuce, tomato, pickles, special sauce, American cheese"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Double Cheeseburger",
      "Two juicy beef patties, double cheese, bacon, lettuce, tomato, special sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Grilled Cheese",
      "Toasted bread, melted cheddar and mozzarella, served with tomato soup"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Caesar Salad",
      "Romaine lettuce, croutons, parmesan cheese, creamy Caesar dressing"
    )
  );
  menu.appendChild(
    createMenuItem(
      "French Fries",
      "Crispy golden fries with ketchup and mayonnaise"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Ribs",
      "Slow-cooked BBQ ribs with homemade sauce, served with coleslaw"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Steak",
      "Grilled ribeye steak with garlic butter, served with seasonal vegetables"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  // Simplify path to use relative path from dist directory
  foodImage.src = `images/pizzas/${name.toLowerCase().replace(/ /g, "-")}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
