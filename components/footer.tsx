export function Footer() {
  return (
    <footer className="py-6 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} - Villa Suárez Abogados
        </p>
      </div>
    </footer>
  );
}
