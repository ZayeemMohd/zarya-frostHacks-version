import React from "react";

function WhyZarya() {
  return (
    <div>
      <div class="h-[100vh] bg-wite flex items-center justify-center">
        <img
          class="w-1/2 mx-12 rounded-lg"
          src="../../public/corruption.avif"
          alt="Image Description"
          style={{ height: 500, width: 400 }}
        />
        <section class="text-lime-500 text-center">
          <h1 className="text-4xl font-bold mb-9">WHY ZARYA</h1>
          <p className="text-xl font-sans leading-loose tracking-normal">
            Donations are one of the best ways with which we can spread hope in
            the <br /> very world we live in, perhaps by helping each other, yet
            there have been many scams <br /> recorded in this act spreading
            positivity and kindness, which promotes giving. These scams <br />{" "}
            occur due to a lack of transparency in the act of donation. <br />{" "}
            With the involvement of intermediaries in offline and online
            donations, <br /> there have been many unavoidable scam cases
            recorded in the past few years. <br /> People in need do not know
            whom to trust in such situations, thereby giving <br /> personal
            information and the leftover money in some cases in the hope <br />{" "}
            that they will get solutions to problems and needs.
          </p>
        </section>
      </div>
    </div>
  );
}

export default WhyZarya;
