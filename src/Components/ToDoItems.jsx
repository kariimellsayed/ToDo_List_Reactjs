/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import del from "../assets/delete.png";

const ToDoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex items-center cursor-pointer flex-1 my-3.5"
      >
        <img
          className="w-6"
          src={isComplete ? tick : notTick}
          alt="tick"
          loading="lazy"
        />
        <p
          className={`ml-4 text-[17px] text-slate-700 decoration-slate-500 ${
            isComplete && "line-through"
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className="w-5 cursor-pointer mr-3"
        src={del}
        alt="delete"
        loading="lazy"
      />
    </div>
  );
};

// ToDoItems.propTypes = {
//   text: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default ToDoItems;
