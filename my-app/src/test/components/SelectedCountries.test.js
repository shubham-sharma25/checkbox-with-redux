import { shallow } from 'enzyme';
import { initialState } from '../../redux/state';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SelectedCountries from '../../components/SelectedCountries';
import { data } from './data/data';


configure({ adapter: new Adapter() });

const props = initialState;
describe("SelectedCountries component ", () => {
    test("should display No Values Selected initially", () => {
        let wrapper = shallow(
            <SelectedCountries {...props} />
        )
        expect(wrapper.find(".no-value-text").text()).toBe("No Values Selected");
    });
    test("should not display cross button initially", () => {
        let wrapper = shallow(
            <SelectedCountries {...props} />
        )
        expect(wrapper.find("button").length).toBe(0);
    });
    test("should display cross button once the data is selected", () => {
        let wrapper = shallow(
            <SelectedCountries {...data} />
        )
        expect(wrapper.find("button").length).toBe(1);
    });
    test("should not display No Values Selected once the data is selected", () => {
        let wrapper = shallow(
            <SelectedCountries {...data} />
        )
        expect(wrapper.find(".no-value-text").length).toBe(0);
    });
});
