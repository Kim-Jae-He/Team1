import Badge from "./Badge";
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItem_Layout";
import dayjs from "dayjs";

import relativeTime from 'dayjs/plugin/relativeTime'; // 추가: 상대적 시간 플러그인 import

// 상대적 시간 플러그인 활성화
dayjs.extend(relativeTime);

const ListItem = ({ checked, onClickCheckBox, onClickTitle, data }) => {
  const badges = data.labels;
  const state = data.state === "open" ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((props, idx) => <Badge key={idx} {...props} />)}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
};

export default ListItem;
