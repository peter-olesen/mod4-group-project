type Props = {
<<<<<<< HEAD
  content: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function ContentButton({content, onClick}: Props) {
=======
  content: string;
};

function ContentButton({ content }: Props) {
>>>>>>> dev
  return (
    <>
    <div></div>
      <button
        className="bg-transparent text-gray-800 font-semibold py-2 px-10 border-[0.5px] active:translate-x-1 active:translate-y-1 transition-transform duration-200
         border-black rounded shadow active:bg-black active:text-white font-montserrat
         mx-auto
         "
         onClick={onClick}
      >
        {content}
      </button>
    </>
  );
}

export default ContentButton;
