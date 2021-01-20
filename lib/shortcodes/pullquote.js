module.exports = (obj) => {
  const html = `
    <div class="sm:flex sm:flex-row items-center p-2 my-0 font-inter text-base text-xl md:text-2xl font-semibold p-8">
      <img src="${obj.imgUrl}" alt="${obj.imgAlt}" class="rounded-full sm:w-36 sm:mr-8 mx-auto" />
      <div>
        <p style="text-indent: -.5ch">
          <span class="italic">"${obj.quote}"</span>
          <br>
          <span class="text-gray-500 inline-block font-medium mt-2">—${obj.author}</span>
        </p>
      </div>
    </div>`;
  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, "");
}
  
