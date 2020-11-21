import SampleComponent from './SampleComponent';
import { create } from "react-test-renderer";

describe("Sample Component" , () => {
    test("test 1", () => {
        const sampleComponent = create(<SampleComponent />);
        const jsonComponent = sampleComponent.toJSON()
        expect(jsonComponent.children[0].children[0]).toEqual("Phillip is cool");
    });
});
  