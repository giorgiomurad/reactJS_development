import Challenge from "./Challenge";

function TimeBoard() {

  return <div className="flex flex-wrap justify-around mx-auto my-14 p-3 w-10/12 bg-slate-900 border-2 border-green-400 rounded-lg">
    <Challenge level={'Very Easy'} targetTime={15} />
    <Challenge level={'Easy'} targetTime={10} />
    <Challenge level={'Normal'} targetTime={5} />
    <Challenge level={'Hard'} targetTime={1} />
  </div>
}

export default TimeBoard;