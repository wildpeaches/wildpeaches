module.exports = (quote, author, imgUrl, imgAlt) => {
  const html = `
    <blockquote class="sm:flex sm:flex-row items-center my-0 not-italic leading-normal">
      <img src="${imgUrl}" alt="${imgAlt}" class="rounded-full w-48 md:w-36 md:ml-0 sm:mr-8 sm:mx-auto" />
      <div class="text-center md:text-left">
        <p style="text-indent: -.55ch">
          <span class="font-semibold">“${quote}”</span>
          <br>
          <span class="text-sm inline-block mt-4 font-medium uppercase tracking-widest" ><span class="text-gray-400">—</span>&thinsp;<span class="text-gray-600">${author}</span></span>
        </p>
      </div>
    </blockquote>`;
  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
};
