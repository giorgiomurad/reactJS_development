import styles from './List.module.css';
import { TrashLogo } from './IconsUI';

function List({ items, onDelete, onCheck }) {
  const { length } = items;

  return <div className={styles.container}>
    <h2 className={styles.status}>Number of Tasks: {length}</h2>
    <ol className={styles.list}>
        {
          items.map((task, index) => {
            const { id, description, completed } = task;

            return <li key={id} className={`${styles.task} ${(completed) ? styles.completed : ''}`}>
              {index+1}. {description}
              <div>
                <input className={styles.checkbox} type='checkbox' onChange={() => onCheck(id)} />
                <TrashLogo onClick={() => onDelete(id)}/>   
              </div>
              </li>
          })
        }
    </ol>
  </div>
}

export default List;