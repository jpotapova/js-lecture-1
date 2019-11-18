describe("Variables exercise code", () => {
  it("should output 3 sentences", () => {
    const spy = jest.spyOn(console, "log"); //
    require("../exercises/3-variables.js");
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith("What is Lorem Ipsum?");
    expect(spy).toHaveBeenCalledWith(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    );
    expect(spy).toHaveBeenCalledWith(
      "It has a more-or-less normal distribution of letters"
    );
  });
});
