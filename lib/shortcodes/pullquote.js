module.exports = (quote, author, imgUrl, imgAlt) => {
  const html = `
    <blockquote class="sm:flex sm:flex-row items-center my-0 p-8">
      <img src="${imgUrl}" alt="${imgAlt}" class="rounded-full sm:w-36 sm:mr-8 mx-auto" />
      <div>
        <p style="text-indent: -.5ch">
          <span class="font-semibold">"${quote}"</span>
          <br>
          <span class="text-gray-600 text-base sm:text-lg inline-block mt-2">—${author}</span>
        </p>
      </div>
    </blockquote>`;
  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
};
