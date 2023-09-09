const ClientExperience = () => {
  return (
    <>
      <section className="min-h-[560px] container mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl text-center">
          We provide the best experience <br /> for our client
        </h2>
        <p className="text-secondary text-center">
          Everything you need to convert, engage, and retain more users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="text-center">
            <h4 className="text-4xl md:text-6xl font-bold text-primary">40+</h4>
            <p>Integrations</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl md:text-6xl font-bold text-primary">500%</h4>
            <p>Return on investment</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl md:text-6xl font-bold text-primary">4k</h4>
            <p>Global customers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientExperience;
