import React, { FC } from "react";
import classNames from "classnames";
import styles from "../../styles/components/Categories.module.scss";

interface ICategoryItemProps {
  index: number;
  label: string;
  isActive: boolean;
  onClick: (index: number) => void;
}

const CategoriesItem: FC<ICategoryItemProps> = ({
  index,
  label,
  isActive,
  onClick,
}) => {
  return (
    <li
      onClick={() => onClick(index)}
      className={classNames(styles.categoryItem, {
        [styles.isActive]: isActive,
      })}
    >
      {label}
    </li>
  );
};

export default React.memo(CategoriesItem);
