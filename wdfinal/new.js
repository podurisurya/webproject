function goBack() {
    window.history.back();
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("addItemForm");
    const formData = new FormData(form);
  
    const item = {
      email: formData.get("email"),
      imageUrl: formData.get("imageUrl"),
      quantity: formData.get("quantity"),
      price: formData.get("price"),
      description: formData.get("description"),
    };
  
    console.log("Form Submitted:", item);
    alert("Item added successfully!");
  
    form.reset();
  }