export function Hero() {
  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-col py-8 px-5 xl:text-left text-center">
        <h1 className="font-bold text-6xl px-2 text-center">E.C.S.</h1>
        <p className="opacity-75 px-2 text-xl text-center">Escola de Computação Solidária - 25.1</p>

        <div className="py-10 px-2 flex flex-col gap-4 text-md text-center">
          <p>
            Aqui, você, estudante da Escola de Computação Solidária, pode verificar suas notas e descobrir se foi aprovado ou não.
          </p>
        </div>
      </div>
    </section>
  );
}
