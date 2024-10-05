/**
 * This code was generated by Builder.io.
 */
import React from "react";

function FormDivider({ text }) {
  return (
    <div className="flex gap-7 items-center mt-20 w-full text-xl font-light whitespace-nowrap max-w-[325px] text-neutral-200">
      <div className="shrink-0 self-stretch my-auto h-px border-2 border-solid border-slate-700 border-opacity-70 w-[82px]" />
      <div className="grow shrink self-stretch w-[92px]">{text}</div>
      <div className="shrink-0 self-stretch my-auto w-20 h-px border-2 border-solid border-slate-700 border-opacity-70" />
    </div>
  );
}

export default FormDivider;
