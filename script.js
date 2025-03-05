// let myCoursesHtml = `
//     <h3>My Courses:</h3>
//     <ul>
//         <li>IT112 - Computer Programming 1 (3.0 units)</li>
//         <li>IT111 - Introduction to Computing (3.0 units)</li>
//         <li>PurCom - Purposive Communication (3.0 units)</li>
//         <li>...</li>
//     </ul>
// `;
// document.querySelector(".education").innerHTML += myCoursesHtml;
document.addEventListener("DOMContentLoaded", function () {
    // Select the search input field
    const searchInput = document.getElementById("searchBar");

    // Select all table rows (excluding headers)
    const tableRows = document.querySelectorAll("table tr:not(:first-child)");

    // Add an event listener to detect input changes
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();

        tableRows.forEach((row) => {
            const rowText = row.textContent.toLowerCase();
            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
