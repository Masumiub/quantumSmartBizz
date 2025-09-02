// app/userdashboard/addSalesData/page.jsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddSalesData() {
  const [activeTab, setActiveTab] = useState('manual');
  const [csvData, setCsvData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Handle manual form submission
  const onSubmitManual = async (data) => {
    setIsLoading(true);
    setUploadStatus({ message: '', type: '' });

    try {
      const response = await fetch('/api/sales/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setUploadStatus({ 
          message: 'Sales data added successfully!', 
          type: 'success' 
        });
        reset(); // Clear the form
      } else {
        setUploadStatus({ 
          message: `Error: ${result.error}`, 
          type: 'error' 
        });
      }
    } catch (error) {
      setUploadStatus({ 
        message: 'Failed to add sales data. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle CSV file upload
  const handleFileUpload = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setUploadStatus({ message: '', type: '' });

    const formData = new FormData();
    if (csvData.length > 0) {
      formData.append('file', csvData[0]);
    } else {
      setUploadStatus({ 
        message: 'Please select a CSV file first', 
        type: 'error' 
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/sales/create', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setUploadStatus({ 
          message: `Successfully uploaded ${result.message}`, 
          type: 'success' 
        });
        setCsvData([]);
        // Clear file input
        const fileInput = document.getElementById('csvFile');
        if (fileInput) fileInput.value = '';
      } else {
        setUploadStatus({ 
          message: `Error: ${result.error}`, 
          type: 'error' 
        });
      }
    } catch (error) {
      setUploadStatus({ 
        message: 'Failed to upload CSV file. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setCsvData(event.target.files);
  };

  return (
    <div className="max-w-4xl p-6 bg-gradient-to-br from-purple-50 to-indigo-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Add Sales Data</h1>

      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'manual'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('manual')}
        >
          Manual Entry
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'csv'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('csv')}
        >
          CSV Upload
        </button>
      </div>

      {/* Status Message */}
      {uploadStatus.message && (
        <div className={`mb-6 p-4 rounded-lg ${
          uploadStatus.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700'
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {uploadStatus.message}
        </div>
      )}

      {/* Manual Entry Form */}
      {activeTab === 'manual' && (
        <form onSubmit={handleSubmit(onSubmitManual)} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Month *
              </label>
              <input
                type="text"
                placeholder="YYYY-MM (e.g., 2024-03)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('month', { 
                  required: 'Month is required',
                  pattern: {
                    value: /^\d{4}-\d{2}$/,
                    message: 'Please use YYYY-MM format'
                  }
                })}
              />
              {errors.month && <p className="text-red-500 text-sm mt-1">{errors.month.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                placeholder="e.g., Laptop Pro"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('product', { required: 'Product name is required' })}
              />
              {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('category', { required: 'Category is required' })}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Audio">Audio</option>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Clothing">Clothing</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('region', { required: 'Region is required' })}
              >
                <option value="">Select Region</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
              </select>
              {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Units Sold
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('unitsSold')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Revenue ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('revenue')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cost ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                {...register('cost')}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? 'Adding Data...' : 'Add Sales Data'}
          </button>
        </form>
      )}

      {/* CSV Upload Form */}
      {activeTab === 'csv' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">CSV File Format</h3>
            <p className="text-sm text-gray-600 mb-2">
              Your CSV file should have the following columns (in any order):
            </p>
            <div className="bg-gray-100 p-3 rounded-md text-sm font-mono text-black">
              month, product, category, region, unitsSold, revenue, cost, profit, profitMargin
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Note: profit and profitMargin are optional. If not provided, they will be calculated automatically.
            </p>
          </div>

          <form onSubmit={handleFileUpload}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CSV File
              </label>
              <input
                id="csvFile"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || csvData.length === 0}
              className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            >
              {isLoading ? 'Uploading...' : 'Upload CSV File'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <h4 className="font-medium text-blue-800 mb-2">Sample CSV Format:</h4>
            <pre className="text-xs bg-white p-2 rounded border text-black">
{`month,product,category,region,unitsSold,revenue,cost,profit,profitMargin
2024-03,Laptop Pro,Electronics,North America,150,224985,135000,89985,40.0
2024-03,Wireless Earbuds,Audio,Europe,250,37487.5,18750,18737.5,50.0
2024-03,Desk Lamp,Home,Asia,500,14995,10000,4995,33.3`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}