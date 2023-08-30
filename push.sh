cd ./FRONT-END
npm run build #create a build
cd ..
rm -rf ./BACK-END/dist #remove the old build folder
mv ./FRONT-END/dist ./BACK-END/dist #replace with new code
cd BACK-END 
# push on heroku
git add .
git commit -m "feat: new build"
git push heroku master