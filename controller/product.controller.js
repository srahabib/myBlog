const searchProduct = async (req, res, next) => {
    try {
      const { q } = req.query;
      const products = await Product.find({ name: { $regex: q, $options: 'i' } });
    
      if (products.length < 1) throw new ErrorHandler(404, 'No product found');
  
      res.status(201).json({
        status: 'success',
        message: 'Product has been found successfully',
        products,
      });
    } catch (error) {
      next(error);
    }
  };