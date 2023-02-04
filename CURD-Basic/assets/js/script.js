const form = document.getElementById("form");
const post = document.getElementById("post");
const alert = document.getElementById("alert");
const postContents = document.getElementById("post-content");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    formValidation();
});

const formValidation = () => {
    if (post.value === "") {
        alert.classList.add("show");
    } else {
        acceptData();
    }
};

const data = {};

const acceptData = () => {
    data["text"] = post.value;
    console.log(data);
    createPost();
};

const createPost = () => {
    postContents.innerHTML += `
    <div class="card mt-3">
        <div class="card-body d-flex">
            <p class="card-text flex-shrink-1 w-100">${data.text}</p>

            <div class="d-flex justify-content-center flex-column ps-3">
                <button onclick="edit(this)" class="btn btn-primary my-1"><img
                        src="./assets/images/edit.svg" alt="">
                    Edit</button>
                <button onclick="deleted(this)" class="btn btn-danger my-1"><img
                    src="./assets/images/delete.svg" alt="">
                    Delete</button>
            </div>
        </div>
    </div>`;

    post.value = "";
};

const deleted = (event) => {
    event.parentElement.parentElement.parentElement.remove();
};
const edit = (event) => {
    post.value = event.parentElement.previousElementSibling.innerHTML;
    event.parentElement.parentElement.parentElement.remove();
};
