import React from "react";
import Card from "./Card";
import paris from "../assets/paris.png";
import london from "../assets/london.png"
import barcelona from "../assets/barcelona.png"
import prague from "../assets/prague.png"


const Home = () => {
  return (
    <section className="mt-5">
      <div className=" p-10 bg-white ">
        <h1 className="text-[ #000000] text-5xl font-bold mb-8">
          {" "}
          CITIES TO VISIT IN EUROPE
        </h1>

        <div class="grid lg:grid-cols-2 gap-10">
          <div>
            <Card
              city="PARIS"
              country="France"
              image={paris}
              description="
            Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.
            "
            />
          </div>
          <div>
            <Card
              city="BARCELONA"
              country="Spain"
              image={barcelona}
              description="Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities."
            />
          </div>
          <div>
            <Card
              city="LONDON"
              country="United Kingdom"
              image={london}
              description="When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts."
            />
          </div>
          <div>
            <Card
              city="PRAGUE"
              country="Czech Republic"
              image={prague}
              description="Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
