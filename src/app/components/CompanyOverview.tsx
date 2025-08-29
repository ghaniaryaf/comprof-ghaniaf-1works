import { companyInfo } from '@/data/mockData';

const CompanyOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Our Company</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">{companyInfo.history}</p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
            <p className="text-gray-600">{companyInfo.culture}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              <img src="https://media.licdn.com/dms/image/v2/C4D1BAQFu0Yp6cAjBpA/company-background_10000/company-background_10000/0/1595870235019/asri_panca_teknik_cover?e=2147483647&v=beta&t=Km0y3cUSadDIBSU5e-vtGaCNvLuNi4RkiQGIATirqqM" alt="company-thumbnail" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">100+</p>
                <p className="text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;