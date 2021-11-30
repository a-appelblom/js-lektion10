import CounterCard from "./CounterCard";

export default function Counter({ count, setCount }) {
  return (
    <section>
      {/* <CounterCard
        title="Totalt Antal klasser HT21"
        count={count}
        subtitle="Kuriosa: Vi välkomnade total 31 nya klasser under augusti månad."
        setCount={setCount}
      />
      <CounterCard
        title="Utbildningar öppna för anmälan"
        count={count}
        subtitle="Naaj! Just nu finns det tyvärr inga utbildningar som är öppna för ansökan."
        setCount={setCount}
      /> */}
      <CounterCard
        title="Totalt Antal klasser HT21"
        subtitle="Kuriosa: Vi välkomnade total 31 nya klasser under augusti månad."
      />
      <CounterCard
        title="Utbildningar öppna för anmälan"
        subtitle="Naaj! Just nu finns det tyvärr inga utbildningar som är öppna för ansökan."
      />
    </section>
  );
}
