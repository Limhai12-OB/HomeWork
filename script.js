let btnLoadData = document.getElementById("btnLoadData");
let data = document.getElementById("data");

btnLoadData.onclick = function () {
  let persons = [];
  let htmlStr = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      persons = json;

      persons.map((person) => {
        htmlStr += `
      
       <div
  class="w-100 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
>
  <a href="#">
    <img
      class="w-100 rounded-lg sm:rounded-none sm:rounded-l-lg"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
      alt="Bonnie Avatar"
    />
  </a>
  <div class="p-10 text-left">
    <h3
      class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      <a href="#">${person.name} ID : ${person.id}</a>
    </h3>
    <span class="text-gray-500 dark:text-gray-400">
      ${person.email} / ${person.website}
    </span>
    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
      Living at St.${person.address.street}, Suite: ${person.address.suite}, City: ${person.address.city}, Zipcode: ${person.address.zipcode} || <br />
      Company: ${person.company.name} <br />
      catchPhrase: ${person.company.catchPhrase} <br />
      bs: ${person.company.bs}.
    </p>
    <ul class="flex space-x-4 sm:mt-0">
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <p>TEL : ${person.phone}</p>
        </a>
      </li>
    </ul>
  </div>
</div>
     
    `;
      });
      data.innerHTML = htmlStr;
    }),
    encode;
};
