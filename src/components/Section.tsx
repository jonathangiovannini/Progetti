import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <section className="grid grid-cols-1 w-full h-144 md:h-96 lg:h-72 items-center sezione-iniziale">
                <div className=" items-center w-full">
                    {children}
                </div>
            </section>
        </>
    );
}

export default Section;