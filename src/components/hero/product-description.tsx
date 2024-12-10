import { Plus } from 'lucide-react';

/**
 * ProductDescription component
 * This component is used to display the product description in the hero section of the website including the product description and the delivery and questions section.
 */

const ProductDescription = () => {
  return (
    <div className="mt-12 flex md:flex-row gap-5 flex-col">
      <div className="w-full space-y-2">
        <h3 className="font-cabinet antialiased text-xl text-gray-900">
          Description produit
        </h3>
        <p className="text-[#9C9C9C] text-sm max-w-[44.438rem]">
          Festi vous propose à la location un/une &quot;Jewel – grand
          couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
          (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire
          ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
          rigoureuse par notre équipe. Il est en location chez nous sous la
          référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que
          les événements de nos clients, même en last-minute, soient toujours
          une réussite. Vous pourrez trouver tout une série d&apos;autre produit
          à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
        </p>
      </div>
      <div className="w-full bg-cardBg rounded-sm cursor-pointer text-[#393939] font-cabinet">
        <p className="h-1/2 p-6 flex justify-between items-center">
          <span className="font-medium">LIVRAISONS</span>
          <Plus size={24} className="text-[#393939]" />
        </p>
        <p className="h-1/2 p-6 flex justify-between items-center">
          <span className="font-medium">QUESTIONS</span>
          <Plus size={24} className="text-[#393939]" />
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
