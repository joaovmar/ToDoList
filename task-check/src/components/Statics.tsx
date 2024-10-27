type Task = {
    id: number;
    label: string;
    completed: boolean;
}

type TaskStatsProps = {
    tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
    const totalCount = tasks.length;
    const completedCount = tasks.filter((task) => task.completed).length;
    const uncompletedCount = tasks.filter((task) => !task.completed).length;
    let borderColor = "rgb(128, 128, 128)";
    // Calculando a taxa de conclusão
    const completionRate = totalCount === 0 ? 0 : (completedCount / totalCount);
    // Calculando a cor RGB com base na taxa de conclusão   
    if (totalCount > 0) {
        const red = Math.floor(255 * (1 - completionRate)); // Vai de 255 a 0
        const green = Math.floor(255 * completionRate); // Vai de 0 a 255
        borderColor = `rgb(${red}, ${green}, 0)`; // Cor variando de vermelho para verde
    }
    

    return (
        <div className="flex gap-10 bg-slate-800 p-4 rounded-lg text-white text-lg">
            <div className="flex flex-col justify-between items-center border-4 border-gray-500 w-40 h-40 p-6 rounded-full mt-2" style={{ borderColor }}>
                <span>Total:</span>
                <span>{totalCount}</span>
            </div>
            <div
                className="flex flex-col justify-between items-center border-4 border-gray-500 w-40 h-40 p-6 rounded-full mt-2">
                <span>Concluídas:</span>
                <span>{completedCount}</span>
            </div>
            <div className="flex flex-col justify-between items-center border-4 border-gray-500 w-40 h-40 p-6 rounded-full mt-2">
                <span>Pendentes:</span>
                <span>{uncompletedCount}</span>
            </div>
        </div>
    );
}
