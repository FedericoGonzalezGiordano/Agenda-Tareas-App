document.addEventListener("DOMContentLoaded", function () {
  const plantilla = document.getElementById("plantilla");
  const btnAgregar = document.getElementById("agregar");

  btnAgregar.addEventListener("click", function () {
    const tarea = document.getElementById("text").value;
    if (tarea === "") {
      alert("Ingrese una tarea");
    } else {
      const listTasks = document.getElementById("list");
      const newTask = plantilla.cloneNode(true);
      newTask.style.display = "block";
      newTask.querySelector("li").textContent = tarea;

      const btnBorrar = newTask.querySelector(".btn-dark");

      btnBorrar.addEventListener("click", function () {
        newTask.remove();
      });

      listTasks.appendChild(newTask);
    }
  });
});
