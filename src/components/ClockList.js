import Clock from "./Clock";

function ClockList({quantites = []}) {
    return (
        <div>
            {quantites.map(() => (
                <Clock key={Math.random()}/>
            ))}
        </div>
    );
}

export default ClockList