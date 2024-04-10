
import styles from  './Plan.module.scss';

function Plan({
    title,
    steps,
    haveTo,
    align
}:{
    title: string;
    steps: string[];
    haveTo: string[];
    align: string;
})
{
    return(
        <div className={`${styles.plan} ${align === 'left' ? styles.left : styles.right}`} data-aos={`${align === 'left' ? ('fade-left') : ('fade-right')}`}
        >
          <h4>{title}</h4>
          <ul> What have I done:
            {steps.map((step) => (
                <li key={step}>{step}</li>
            ))}
          </ul>
          <ul>What I have to do:
          {haveTo.map((item) => (
                <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
    );
}

export default Plan;