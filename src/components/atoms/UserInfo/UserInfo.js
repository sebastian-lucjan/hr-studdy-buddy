export const UserInfo = ({ userData }) => {
  const { name, attendance = '0%' } = userData;
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
    </>
  );
};
