import { useState } from "react";
import { Plus } from "./icons/plus";

type FormProps = {
    onSubmit: (text: string) => void;
    onClear: () => void;
    onPause: () => void;
}

export function Form(props: FormProps) {
    const [state, setState] = useState("");

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (state) {
                    props.onSubmit(state);
                    setState("");
                }
            }}>
                <div className="flex flex-row w-full gap-4 mt-4">
                    <input
                        className="h-[50px] flex-1 rounded-lg p-3 text-lg outline-none"
                        onChange={(event) => setState(event.target.value)}
                        value={state}
                        placeholder="Adicionar tarefa"
                    />
                    <button
                        className="h-[50px] pl-4 pr-4 bg-slate-400 rounded-lg font-bold"
                        type="submit"
                    >
                        <Plus className="text-slate-900 text-2xl" />
                    </button>
                    <button
                        className="h-[50px] pl-4 pr-4 bg-red-500 rounded-lg font-bold text-white"
                        type="button"
                        onClick={props.onClear}
                    >
                        Limpar Tudo
                    </button>
                    <button
                        className="h-[50px] pl-4 pr-4 bg-yellow-400 rounded-lg font-bold text-black"
                        type="button"
                        onClick={props.onPause}
                    >
                        Pausar Todas
                    </button>
                </div>
            </form>
        </>
    )
}