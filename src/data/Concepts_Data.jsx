import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    code: `
      function Welcome() {
        return <h1>Hello, World!</h1>;
      }`,
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    code: `
      <div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
      </div>`,
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    code: `
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }`,
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    code: `
      function Counter() {
        const [isVisible, setIsVisible] = useState(false);
        
        function handleClick() {
          setIsVisible(true);
        }
      
        return (
          <div>
            <button onClick={handleClick}>Show Details</button>
            {isVisible && <p>Amazing details!</p>}
          </div>
        );
      }`,
  },
];
