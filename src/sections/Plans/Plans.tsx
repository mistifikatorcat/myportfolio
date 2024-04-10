import Plan from "@/components/Plan/Plan";
import styles from "./Plans.module.scss";
import { plans } from "@/utils/variables";
// import Image from "next/image";
// import Link from "next/link";

function Plans() {
  return (
    <section className={styles.plans}>
      <h2>What am I currently up to: </h2>
        <br />
        <div className={styles.planBoard}>
          {plans.map((plan, index) => (
            <Plan
            key={index}
            title={plan.title}
            steps={plan.steps}
            haveTo={plan.haveTo}
            align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
        
    </section>
  );
}

export default Plans;
