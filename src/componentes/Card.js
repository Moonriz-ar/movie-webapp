function Card({ description }) {
  return (
    <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img
        class="h-56 lg:h-60 w-full object-cover"
        src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div class="p-3">
        <span class="text-sm text-primary">November 19, 2022</span>
        <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
          International Women's Day 2022: Date, history, significance, theme
          this year
        </h3>
        <p class="paragraph-normal text-gray-600">{description}</p>
        <a class="mt-3 block" href="/">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;