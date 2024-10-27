
import { useMemo } from "react";
import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { useLocalStorage } from "usehooks-ts";
import { TaskStats } from "./components/Statics"; // Importando o componente

export function App() {
    const [lista, setLista] = useLocalStorage<Todo[]>("tarefas", []);
    const [filter, setFilter] = useLocalStorage<"all" | "completed" | "uncompleted">("filtro", "all");

    const addTask = (task: string) => {
        setLista([
            ...lista,
            { id: lista.length + 1, text: task, completed: false }
        ]);
    };

    const clearTasks = () => {
        setLista([]); // Remove todas as tarefas
    };

    const pauseAllTasks = () => {
        setLista(lista.map((item) => ({ ...item, completed: false }))); // Marca todas as tarefas como não concluídas
    };

    const listaFiltrada = useMemo(() => {
        if (filter === "all") {
            return lista;
        }
        if (filter === "completed") {
            return lista.filter((item) => item.completed);
        }
        return lista.filter((item) => !item.completed);
    }, [lista, filter]);

    return (
        <Container>
            <TaskStats tasks={lista} /> {/* Passando a lista de tarefas para o TaskStats */}
            <Content>
                <h1 className="text-white text-lg font-bold">Workshop React 2024</h1>
                <Form onSubmit={addTask} onClear={clearTasks} onPause={pauseAllTasks} />
                <Filters filter={filter} setFilter={setFilter} />
                <List>
                    {listaFiltrada.map((item, index) => (
                        <Item
                            key={index}
                            text={item.text}
                            completed={item.completed}
                            onClick={() => {
                                setLista(lista.map((itemX, indexX) => {
                                    if (index === indexX) {
                                        return { ...itemX, completed: !itemX.completed };
                                    }
                                    return itemX;
                                }));
                            }}
                        />
                    ))}
                </List>
            </Content>
        </Container>
    );
}