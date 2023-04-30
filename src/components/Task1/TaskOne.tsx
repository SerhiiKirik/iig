import styles from './TaskOne.module.scss';

const FIRST_TASK = [
  'FIRST',
  'SECOND',
  'SOME THIRD TEXT',
];

export const TaskOne = () => {
  return (
    <div className={styles.wrapper}>
      {FIRST_TASK.map((text) => (
        <h2 className={styles.text} key={text}>
          {text}
        </h2>
      ))}
    </div>
  );
};
