set -e

npm run build
cd docs/.vuepress/dist
echo 'sakur.daydayupran.top' > CNAME

git init
git add -A
git commit -m '测试sh脚本提交'

git push -f git@github.com:ranyong1997/sakura-blog.git master

cd -