interface AuthlayoutProps {
  children: React.ReactNode;
}

const Authlayout = ({ children }: AuthlayoutProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default Authlayout;
