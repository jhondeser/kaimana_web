import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'Todas' },
  { id: 'yoga', name: 'Yoga' },
  { id: 'slackline', name: 'Slackline' },
  { id: 'surf', name: 'Surf' },
  { id: 'skate', name: 'Skate' },
  { id: 'meditation', name: 'Meditación' }
];

export default function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <section style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'var(--color-highlight)'
    }}>
      <h2 style={{ 
        marginBottom: '1.5rem',
        color: 'var(--color-text-primary)'
      }}>
        Explora por categoría
      </h2>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '25px',
              backgroundColor: selectedCategory === category.id 
                ? 'var(--color-accent-primary)' 
                : 'var(--color-accent-secondary)',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: selectedCategory === category.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}